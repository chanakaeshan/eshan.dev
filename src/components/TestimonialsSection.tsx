"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card } from "./ui/card";

const testimonials = [
  {
    name: "Gayan Sudeera",
    role: "Owner of Serene Lanka travel",
    image: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-1/412190073_1309373410464053_3674242885806527523_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=101&ccb=1-7&_nc_sid=e99d92&_nc_ohc=BXA-Xd4qQ-EQ7kNvwGF5Y17&_nc_oc=Adl-oPufOovs2-ELOWcO87IzFvomd-LzMSkNTJqYIGVV4L0hdjm_oZApuI9bgvyoF1g&_nc_zt=24&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=FhMaNX1zG1ID5YsN_Rs54g&oh=00_AfX04lSiAC4drqDJMuYcGk52zqdQHzwS1xeoklbaOWZjCQ&oe=689637D1",
    content: "Chanaka gave us the precise tactic we were lacking.  Although our brand awareness was a significant obstacle, their astute and innovative ideas resulted in a significant increase in interaction."
  },
  {
    name: "Gayan Sudeera",
    role: "Owner of Serene Lanka travel",
    image: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-1/412190073_1309373410464053_3674242885806527523_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=101&ccb=1-7&_nc_sid=e99d92&_nc_ohc=BXA-Xd4qQ-EQ7kNvwGF5Y17&_nc_oc=Adl-oPufOovs2-ELOWcO87IzFvomd-LzMSkNTJqYIGVV4L0hdjm_oZApuI9bgvyoF1g&_nc_zt=24&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=FhMaNX1zG1ID5YsN_Rs54g&oh=00_AfX04lSiAC4drqDJMuYcGk52zqdQHzwS1xeoklbaOWZjCQ&oe=689637D1",
    content: "Chanaka gave us the precise tactic we were lacking.  Although our brand awareness was a significant obstacle, their astute and innovative ideas resulted in a significant increase in interaction."
  },
  {
    name: "Gayan Sudeera",
    role: "Owner of Serene Lanka travel",
    image: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-1/412190073_1309373410464053_3674242885806527523_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=101&ccb=1-7&_nc_sid=e99d92&_nc_ohc=BXA-Xd4qQ-EQ7kNvwGF5Y17&_nc_oc=Adl-oPufOovs2-ELOWcO87IzFvomd-LzMSkNTJqYIGVV4L0hdjm_oZApuI9bgvyoF1g&_nc_zt=24&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=FhMaNX1zG1ID5YsN_Rs54g&oh=00_AfX04lSiAC4drqDJMuYcGk52zqdQHzwS1xeoklbaOWZjCQ&oe=689637D1",
    content: "Chanaka gave us the precise tactic we were lacking.  Although our brand awareness was a significant obstacle, their astute and innovative ideas resulted in a significant increase in interaction."
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 overflow-hidden bg-black">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-normal mb-4">Trusted Customers</h2>
          <p className="text-muted-foreground text-lg">
            We have satisfied Customers who trust us with their business
          </p>
        </motion.div>

        <div className="relative flex flex-col antialiased">
          <div className="relative flex overflow-hidden py-4">
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={`${index}-1`} className="w-[400px] shrink-0 bg-black/40 backdrop-blur-xl border-white/5 hover:border-white/10 transition-all duration-300 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-white/90">{testimonial.name}</h4>
                      <p className="text-sm text-white/60">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    {testimonial.content}
                  </p>
                </Card>
              ))}
            </div>
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={`${index}-2`} className="w-[400px] shrink-0 bg-black/40 backdrop-blur-xl border-white/5 hover:border-white/10 transition-all duration-300 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-white/90">{testimonial.name}</h4>
                      <p className="text-sm text-white/60">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    {testimonial.content}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;