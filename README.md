# SharePoint Font Change and Chatbot Integration

This SharePoint Framework (SPFx) application customizer integrates custom font styles across SharePoint sites and provides a floating chatbot functionality.

## Overview

This solution leverages SPFx to customize the font styles across all pages within a SharePoint site collection. Additionally, it embeds a floating chatbot icon that allows users to interact with a chatbot seamlessly.

## Features

- **Font Customization**: Customizes the font styles for all elements across SharePoint pages.
- **Floating Chatbot Icon**: Integrates a floating chatbot icon that allows users to interact with the chatbot from any page within the SharePoint site.

## Prerequisites

- SharePoint Online environment
- SharePoint Framework (SPFx) development environment set up

## Installation

1. Clone this repository to your local machine.
2. Navigate to the root directory of the cloned repository.
3. Run `npm install` to install the project dependencies.
4. Run `gulp bundle --ship` followed by `gulp package-solution --ship` to bundle and package the solution.
5. Deploy the generated package (`.sppkg` file) to your SharePoint app catalog.
6. Add the deployed solution to the site collection's site contents.
7. Navigate to the site collection where you want to apply the font customization and chatbot integration.
8. Configure the custom font URL and other properties as needed in the SharePoint site.
9. The font customization and chatbot integration will be applied to all pages within the site collection.

## Configuration

The font customization and chatbot integration can be configured using the properties of the SharePoint Framework application customizer.

- `fontUrl`: URL of the custom font stylesheet.
- Other configuration options such as the URL of the chatbot iframe and the size and positioning of the chatbot can be adjusted as needed.
- SharePoint page placeholders can be used to apply the font customization to specific parts of the page. Available placeholders include:
  - `{PageHeader}`
  - `{PageContent}`
  - `{PageFooter}`
  - `{TopPlaceholder}`
  - `{BottomPlaceholder}`

## Usage

- Once deployed and configured, the font customization and chatbot integration will be automatically applied to all pages within the SharePoint site collection.
- Users can interact with the chatbot by clicking on the floating chatbot icon, which will display the chatbot container.

## Contact

For any inquiries or support, please contact [Your Name](mailto:youremail@example.com).

