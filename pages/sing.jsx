import React from "react";
// import { motion } from "framer-motion";

const AboutContent = () => {
  return (

    <div >
      <div className="flex flex-col gap-5 m-auto w-[800px] h-[1404px] mt-20">
        <div className="flex flex-col gap-3 items-start justify-start  ">
        <h1 className="font-black font-extrabold italic">
          The Impact of Technology on the Workplace: How Technology is Changing
        </h1>
        <div className="flex gap-4 ">
          <div className="flex">
            <img
              src="https://s3-alpha-sig.figma.com/img/0b91/04ea/6891be7496ccabdc2fd0b1a1d8a535d7?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ASsUJQLr5S8jzyxOML28Npg9tdcKIqV7lcued3roZlqZwJreFdMUAyy2IG31u4ry6azP0wqmk~pWmSwYY2BqNB2MqvpOETqKwcQkAuskF-QyRzxxj8aZbh5SfGt~q5AyI0EYqLlpoQnHAW4z6TjSmr9n25jprF-s84XJv1UIieDFwc9QL7Qekw5ZMtsPor8etASMJ0cWqvqhxS93er8qmI1ysU501n6rUzH5~kN5pVjdn5sJdmLxWF6TiE2ywib3W9TXO31LCGnSa4olEFtRhEBigsXCgEGsJdZEZuLGDCPKT6rnTtyssDFRilXNwjEvWkgivt4f5Fbz3SaDlVg0Lg__"
              alt="Your Photo"
              className="w-7 h-7 mx-auto rounded-full md:mx-0"
            />
            <p>Tracey Wilson</p>
          </div>

          <p>August 20, 2022 </p>
        </div>
        </div>
       
        <div className="flex m-auto">
          <img
            src="https://s3-alpha-sig.figma.com/img/eb1f/38cd/a6a8e0df2280c787cafc780464b002fe?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A3BFEMM5RSQtrOwQoHaucmqveT7gyfag5PpFXGNlUbc8dKQa3D4HgU7Rwnh0X0LW9rc4nBo3J0Nidw8Tq0-YhQfY0eLbLLJ~5o7H8Lexd4-Dfc7nzXN2uP9~0TU3bbXbDCSwrd0VwidUTGicyBlZfT8gxdHxAWoSn7SiM401vGvCirVOyeEQwxZWzV5ViPi97SzmdCr7khQ70~pbTWkLQjentdIcJ-ZA4LRZqxMzKW7k0LmQ1YgGjz8eH3NL11jDGpKDVn9pwpqsK4ImMqB2WRkJh1x5dXbXbxQSSYq1qGd6le1RmlPXjuwg7vX5DXN~Cqmf7oFiGIK4Vj2NaG4~jg__"
            alt="Your Photo"
            className="w-[804px] h-[462px] mx-auto rounded-xl md:mx-0"
          />
        </div>
        <div className="w-[804px] h-[1060px] m-auto flex flex-col gap-8">
          <p className="  text-gray-600">
            Traveling is an enriching experience that opens up new horizons,
            exposes us to different cultures, and creates memories that last a
            lifetime. However, traveling can also be stressful and overwhelming,
            especially if you don't plan and prepare adequately. In this blog
            article, we'll explore tips and tricks for a memorable journey and
            how to make the most of your travels.
          </p>
          <p>
            One of the most rewarding aspects of traveling is immersing yourself
            in the local culture and customs. This includes trying local
            cuisine, attending cultural events and festivals, and interacting
            with locals. Learning a few phrases in the local language can also
            go a long way in making connections and showing respect.
          </p>
          <h2 className="font-black italic">Research Your Destination</h2>
          <p className="mt-4 text-gray-600">
            Before embarking on your journey, take the time to research your
            destination. This includes understanding the local culture, customs,
            and laws, as well as identifying top attractions, restaurants, and
            accommodations. Doing so will help you navigate your destination
            with confidence and avoid any cultural faux pas.
          </p>
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. In
            hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi ipsum
            faucibus vitae aliquet nec ullamcorper sit amet. Aenean euismod
            elementum nisi quis eleifend quam adipiscing vitae. Viverra
            adipiscing at in tellus.
          </p>
          <h2 className="font-black italic ">Plan Your Itinerary</h2>
          <p>
            While it's essential to leave room for spontaneity and unexpected
            adventures, having a rough itinerary can help you make the most of
            your time and budget. Identify the must-see sights and experiences
            and prioritize them according to your interests and preferences.
            This will help you avoid overscheduling and ensure that you have
            time to relax and enjoy your journey.
          </p>
          <p>
            Vitae sapien pellentesque habitant morbi tristique. Luctus venenatis
            lectus magna fringilla. Nec ullamcorper sit amet risus nullam eget
            felis. Tincidunt arcu non sodales neque sodales ut etiam sit amet.
          </p>
        </div>
      </div>
    </div>
    // </motion.div>
  );
};

export default AboutContent;
