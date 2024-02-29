import { Log } from '@microsoft/sp-core-library';
import { BaseApplicationCustomizer } from '@microsoft/sp-application-base';
import * as strings from 'FontChangeApplicationCustomizerStrings';

const LOG_SOURCE: string = 'FontChangeApplicationCustomizer';

export interface IFontChangeApplicationCustomizerProperties {
  fontUrl: string; // URL of your custom font stylesheet
}

export default class FontChangeApplicationCustomizer extends BaseApplicationCustomizer<IFontChangeApplicationCustomizerProperties> {

  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);

    // Inject custom font CSS and chatbot icon
    this.injectFontCss();

    return Promise.resolve();
  }

  private injectFontCss(): void {
    const fontUrl: string = this.properties.fontUrl || 'https://fonts.googleapis.com/css2?family=Broadway&display=swap';

    // Create link element for custom font
    const linkElement: HTMLLinkElement = document.createElement('link');
    linkElement.href = fontUrl;
    linkElement.rel = 'stylesheet';
    document.head.appendChild(linkElement);

    // Apply CSS to change font for all elements on the page
    const customCss: string = `
      /* Change font for all elements */
      * {
        font-family: 'Broadway', sans-serif;
      }

      /* Style for chatbot icon */
      .chatbot-icon {
        position: fixed;
        bottom: 20px; /* Adjust as needed */
        right: 20px; /* Adjust as needed */
        z-index: 9999;
        width: 20px; /* Set the width of the icon to 20px */
        height: 20px; /* Set the height of the icon to 20px */
        /* Add additional styling for the chatbot icon here */
      }

      /* Style for chatbot container */
      .chatbot-container {
        position: fixed;
        bottom: 20px; /* Adjust as needed */
        right: 20px; /* Adjust as needed */
        width: 300px; /* Adjust as needed */
        height: 400px; /* Adjust as needed */
        border: 1px solid #ccc;
        background-color: #fff;
        z-index: 9998; /* Ensure it's behind the chatbot icon */
        display: none; /* Initially hide the container */
      }
    `;
    const styleElement: HTMLStyleElement = document.createElement('style');
    styleElement.innerHTML = customCss;
    document.head.appendChild(styleElement);

    // Inject chatbot icon into the page
    const chatbotIcon: HTMLImageElement = document.createElement('img');
    chatbotIcon.src = 'https://ai-finder.fra1.cdn.digitaloceanspaces.com/logos/copilot365.jpg'; // Path to your chatbot icon
    chatbotIcon.className = 'chatbot-icon';
    document.body.appendChild(chatbotIcon);

    // Inject chatbot container into the page
    const chatbotContainer: HTMLDivElement = document.createElement('div');
    chatbotContainer.className = 'chatbot-container';
    document.body.appendChild(chatbotContainer);

    // Add click event listener to the chatbot icon to toggle the chatbot container
    chatbotIcon.addEventListener('click', () => {
      if (chatbotContainer.style.display === 'none') {
        chatbotContainer.style.display = 'block'; // Show the chatbot container when the icon is clicked
      } else {
        chatbotContainer.style.display = 'none'; // Hide the chatbot container if it's already visible
      }
    });

    // Inject chatbot iframe into the chatbot container
    const chatbotIframe: HTMLIFrameElement = document.createElement('iframe');
    chatbotIframe.src = 'https://web.powerva.microsoft.com/environments/a5418056-555e-e95e-ba77-107011c0bd0a/bots/cr3d7_sampleChatbot/webchat?__version__=2';
    chatbotIframe.frameBorder = '0';
    chatbotIframe.style.width = '100%';
    chatbotIframe.style.height = '100%';
    chatbotContainer.appendChild(chatbotIframe);
  }
}
