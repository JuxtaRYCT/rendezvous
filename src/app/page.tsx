import React from "react";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="text-center mt-24">
        <p className="text-gray-600 font-bold">Scheduled without fuss for</p>
        <div className="flex gap-8 *:h-8 mt-6 justify-center">
          <img
            src="https://images.ctfassets.net/lh3zuq09vnm2/7EHGsWMc29UoHErPsvRAsi/0f8210b12ada1e9faa313b4d56274572/Panasonic.svg"
            alt=""
          />
          <img
            src="https://images.ctfassets.net/lh3zuq09vnm2/7dsuPwH4V8KJvCexSZueZc/272b2ef619de8ae4b443758413a19733/Unbounce_Logo.svg"
            alt=""
          />
          <img
            src="https://images.ctfassets.net/lh3zuq09vnm2/4Y87kRrhSPSYgUbSWYxP1z/a13177cf43f99e7a79c691c54e271a98/Hubspot.svg"
            alt=""
          />
          <img
            src="https://images.ctfassets.net/lh3zuq09vnm2/18dCY8kGkSbfdNB2Eod1Pp/4768154e8873caa4c1574499dc4e2aab/Microsoft_Logo.svg"
            alt=""
          />
          <img
            src="https://images.ctfassets.net/lh3zuq09vnm2/1F2mq86JzeTrvpY7QdJZmh/b29471d788aabbc36a27d5dea6dae917/Nintendo.svg"
            alt=""
          />
          <img
            src="https://images.ctfassets.net/lh3zuq09vnm2/7siImqwRupwoBHyJCaO1zy/2d7ec1ccc7761f76c8fe18de52e889a4/T-Mobile.svg"
            alt=""
          />
        </div>
      </section>
    </>
  );
}
