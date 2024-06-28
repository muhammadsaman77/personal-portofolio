"use client";
import { FormEvent, useState } from "react";
import Image from "next/image";
import github from "../../public/icons/github.svg";
import linkedin from "../../public/icons/skill-icons--linkedin.svg";
import instagram from "../../public/icons/skill-icons--instagram.svg";

export default function Contact() {
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "nothing" | "loading" | "error" | "success"
  >("nothing");
  const handleStatus = (status: string) => {
    if (status == "success") {
      return "Submitted ✅";
    }
    if (status == "error") {
      return "Failed ❌";
    }
    if (status == "loading") {
      return "Submitting...";
    }

    return "Submit";
  };
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch("/api/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setStatus("success");
        setValues({
          fullname: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      setStatus("error");
      setValues({
        fullname: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <div className="mx-auto w-10/12 mt-20">
      <div className="flex justify-between md:flex-col">
        <div className="w-5/12 md:w-full" data-aos="fade-right">
          <h1 className="text-3xl font-inter font-bold text-yellow-primary">
            Contact
          </h1>
          <p className="mt-4 text-base leading-6">
            Interested in my portfolio? You can contact me through the social
            media below or send a message to my email.
          </p>
          <div className="flex flex-col gap-4 mt-8">
            <div className="flex gap-4 items-center">
              <Image
                src={instagram}
                alt="instagram"
                width={32}
                className="inline-block"
              />
              <span className="font-inter text-sm font-semibold">
                @muhammad_saman77
              </span>
            </div>
            <div className="flex gap-4 items-center">
              <Image
                src={github}
                alt="github"
                width={32}
                className="inline-block"
              />
              <span className="font-inter text-sm font-semibold">
                muhammadsaman77
              </span>
            </div>
            <div className="flex gap-4 items-center">
              <Image
                src={linkedin}
                alt="linkedin"
                width={32}
                className="inline-block"
              />
              <span className="font-inter text-sm font-semibold">
                muhammadsaman77
              </span>
            </div>
          </div>
        </div>

        <div
          className="md:w-full md:mt-4 w-6/12 bg-[rgb(29,29,29)] rounded-lg p-5"
          data-aos="fade-left"
        >
          <form onSubmit={handleSubmit} method="post">
            <div>
              <label className="block mb-2 font-inter text-base">Name</label>
              <input
                type="text"
                placeholder="Your name"
                onChange={(e) =>
                  setValues({ ...values, fullname: e.target.value })
                }
                value={values.fullname}
                className="w-full rounded   h-11 text-black p-2"
              />
            </div>
            <div className="mt-5">
              <label
                htmlFor="contact-email"
                className="block mb-2 font-inter text-base"
              >
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                value={values.email}
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
                className="w-full rounded h-11 text-black p-2"
                inputMode="email"
                placeholder="Your preferred contact email"
                required
              />
            </div>
            <div className="mt-5">
              <label
                htmlFor="contact-message"
                className="block mb-2 font-inter text-base"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                value={values.message}
                onChange={(e) =>
                  setValues({ ...values, message: e.target.value })
                }
                placeholder="Tell me about your project"
                className="w-full rounded h-24 text-black p-2"
                required
              ></textarea>
            </div>
            <button className="w-full mt-5 bg-yellow-primary font-inter font-semibold text-sm text-slate-800 p-3 rounded-lg">
              {handleStatus(status)}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
