import home from "../styles/css/home.module.css";

export default function SocialProof() {
  return (
    <section className={home.socialProofSection}>
      <h2>
        Braincells.io encompasses and connects a myriad of productivity apps
      </h2>
      <div className={home.socialProofSectionList}>
        <div>
          <img
            src="https://www.insiteful.com.au/wp-content/uploads/2022/12/calendly-logo.webp"
            alt="Calendly logo"
          />
        </div>
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png"
            alt="Slack logo"
          />
        </div>
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png"
            alt="Notion logo"
          />
        </div>
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Google_Sheets_logo_%282014-2020%29.svg/1200px-Google_Sheets_logo_%282014-2020%29.svg.png"
            alt="Google Sheets logo"
          />
        </div>
        <div>
          <img
            src="https://static-00.iconduck.com/assets.00/todoist-icon-2048x2048-6xd8pwo3.png"
            alt="Todoist logo"
          />
        </div>
        <div>
          <img
            src="https://gstatic.com/images/branding/product/1x/gfit_512dp.png"
            alt="Google Fit logo"
          />
        </div>
        <div>
          <img
            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-03-512.png"
            alt="Google Calendar logo"
          />
        </div>
      </div>
    </section>
  );
}
