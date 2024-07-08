import home from "../styles/css/home.module.css";

export default function BenefitsSection() {
  return (
    <section className={home.benefitsSection + " " + home.darkBg}>
      <h2>Benefits</h2>
      <div className={home.benefitsSectionGrid}>
        <div>
          <h3>
            <img
              src="https://www.notion.so/icons/rocket_gray.svg?mode=light"
              alt="Rocket icon"
            />
            Boost your productivity
          </h3>
          <p>
            Automate repetitive tasks and focus on what matters most. Spend less
            time on manual work and more on creative tasks.
          </p>
        </div>
        <div>
          <h3>
            <img
              src="https://www.notion.so/icons/lock_gray.svg?mode=light"
              alt="Lock icon"
            />
            Keep your data secure
          </h3>
          <p>
            Your data is safe with us. We don't store any of your information on
            our servers. We only read and write to your Notion workspace.
          </p>
        </div>
        <div>
          <h3>
            <img
              src="https://www.notion.so/icons/heart_gray.svg?mode=light"
              alt="Heart icon"
            />
            Improve your well-being
          </h3>
          <p>
            Automate your health tracking, meditation routines, and more. Keep
            your mind and body in check with our health automations.
          </p>
        </div>
        <div>
          <h3>
            <img
              src="https://www.notion.so/icons/brain_gray.svg?mode=light"
              alt="Brain icon"
            />
            Learn new skills
          </h3>
          <p>
            Enhance your learning experience with our education automations.
            Keep track of your progress and stay motivated.
          </p>
        </div>
        <div>
          <h3>
            <img
              src="https://www.notion.so/icons/leaf_gray.svg?mode=light"
              alt="Leaf icon"
            />
            Stay organised
          </h3>
          <p>
            Keep your life in order with our productivity automations. Plan your
            day, track your habits, and stay on top of your tasks.
          </p>
        </div>
      </div>
    </section>
  );
}
