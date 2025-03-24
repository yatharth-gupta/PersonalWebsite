import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <motion.h2
        className="section-title text-center mb-6 text-accent font-bold text-3xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Let's Connect
        <div className="underline mx-auto mt-2 bg-accent h-1 w-24"></div>
      </motion.h2>

      <div className="max-w-2xl mx-auto text-center">
        <motion.p
          className="text-textSecondary text-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I'm currently looking for new opportunities and my inbox is always
          open. Whether you have a question, want to collaborate on a project,
          or just want to say hi, I'll get back to you as soon as possible!
        </motion.p>

        <motion.form
          className="space-y-6 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-1/2">
              <input
                type="text"
                placeholder="Name"
                className="input-field"
                required
              />
            </div>
            <div className="md:w-1/2">
              <input
                type="email"
                placeholder="Email"
                className="input-field"
                required
              />
            </div>
          </div>

          <div>
            <input
              type="text"
              placeholder="Subject"
              className="input-field"
            />
          </div>

          <div>
            <textarea
              placeholder="Message"
              rows={5}
              className="input-field resize-none"
              required
            ></textarea>
          </div>
          {/* rounded boundary and small width */}
          <button
            type="submit"
            className="btn-primary py-3 rounded-full w-full md:w-1/2 mx-auto"
            onClick={(e) => e.preventDefault()}
          >
            Send Message
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-textSecondary">
            Prefer direct email? Reach me at{" "}
            <a
              href="mailto:yatharth.gupta@example.com"
              className="text-primary hover:underline"
              rel="noopener"
            >
              guptayatharth1@gmail.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
