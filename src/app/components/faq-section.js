import home from '../styles/css/home.module.css';

export default function FAQSection() {
  return (
    <section className={home.faqSection + ' ' + home.darkBg}>
      <h2>FAQs</h2>
      <h3>
        Most common questions about the platform answered here.<br></br>If you
        have any other questions, feel free to contact our team.
      </h3>
      <div className={home.faqSectionGrid}>
        <div>
          <h3><img src='https://www.notion.so/icons/question-mark_gray.svg?mode=light' alt='Question mark icon' />
            What apps does braincells.io work with?</h3>
          <p>
            Braincells.io integrates with your{' '}
            <a href='https://notion.so/product'>Notion</a> workspace and lets it
            communicate with Slack, Google Sheets, and more.
          </p>
        </div>
        <div>
          <h3><img src='https://www.notion.so/icons/question-mark_gray.svg?mode=light' alt='Question mark icon' />Is there a free tier?</h3>
          <p>
            Yes, we offer a free tier with a limit of 1 active "braincell". You
            can upgrade to a paid plan at any time.
          </p>
        </div>
        <div>
          <h3><img src='https://www.notion.so/icons/question-mark_gray.svg?mode=light' alt='Question mark icon' />Is there a risk for my Notion content?</h3>
          <p>
            Braincells.io only reads and writes to your Notion workspace. We
            don't store any of your data on our servers.
          </p>
        </div>
        <div>
          <h3><img src='https://www.notion.so/icons/question-mark_gray.svg?mode=light' alt='Question mark icon' />Do you offer onboarding assistance for new users?</h3>
          <p>
            Yes, we offer a 30-minute onboarding session for new users. You can
            book a session after you sign up.
          </p>
        </div>
        <div>
          <h3><img src='https://www.notion.so/icons/question-mark_gray.svg?mode=light' alt='Question mark icon' />What if I need help with a specific automation?</h3>
          <p>
            Customisation is key to our platform. If you have a specific need
            that isn't covered by our current automations, we can create a
            custom one for you.
          </p>
        </div>
      </div>
      <div className={home.faqSectionContact}>
        <h3>More questions?</h3>
        <p>
          For any other questions, feel free to contact our team, and we'll get
          back to you as soon as possible.
        </p>
        <a href='/contact-us' className={home.faqSectionContactButton}>
          Contact us
        </a>
      </div>
    </section>
  );
}
