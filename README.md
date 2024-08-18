# Unsplash Copy Project

## Project Description

This project is a personal recreation of the popular image-sharing platform, Unsplash. Built as a hobby project, it serves as a practical exercise to learn and implement modern web development techniques. The primary goals of this project were to explore working with external APIs, improve React development skills, and learn how to implement efficient data fetching and caching strategies.

## Features

### 1. Working with Unsplash API

- **Description:** Integrated with the Unsplash API to fetch and display high-quality images.
- **Search Functionality:** Implemented a search feature that allows users to search for photos based on keywords, using the Unsplash API's search endpoint.
- **Implementation:** The project uses axios to make HTTP requests to the Unsplash API. The fetched data includes image URLs, photographer details, and other metadata, which are displayed in a responsive grid layout.

### 2. Infinite Scroll

- **Description:** Implemented infinite scrolling functionality to dynamically load more photos as the user scrolls down the page.
- **Implementation:** Utilized React's state management and event handling to detect when the user reaches the bottom of the page, triggering a fetch for more photos. This creates a seamless user experience, allowing continuous browsing without the need for pagination.

### 3. Caching with React Query

- **Description:** Implemented data fetching and caching using `react-query`, which enhances the performance and user experience by reducing unnecessary API calls.
- **Implementation:** Leveraged `react-query` to manage server state, automatically caching the results of API requests. This ensures that previously fetched data is readily available, even when the user navigates back and forth, resulting in faster load times and reduced API usage.

### 4. Unit Testing

- **Description:** Added unit tests to ensure the reliability and correctness of individual components and functions.
- **Implementation:** Utilized testing frameworks like Vitest and soon React Testing Library to write and run unit tests. Key components and utility functions have been covered by tests to verify that they behave as expected under various conditions. This practice not only helps catch bugs early but also ensures that future changes to the codebase do not introduce regressions.

## Technologies Used

- **React:** For building the user interface.
- **TypeScript:** For type-safe JavaScript code.
- **Styled-components:** For styling the components.
- **Unsplash API:** As the source of images.
- **React Query:** For data fetching and caching.
- **Axios:** For making API requests.
- **Vitest:** For running unit tests.
- **React Testing Library:** For testing React components

## Getting Started

### Prerequisites

- **Node.js:** Ensure you have Node.js installed on your machine.
- **Unsplash API Key:** You need an API key from Unsplash to access their API. You can obtain one by creating a developer account on the [Unsplash Developer portal](https://unsplash.com/developers).

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ThaikoZ/unsplash-copy
   ```
2. **Navigate to the project directory:**

   ```bash
   cd unsplash-copy
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Create a `.env` file in the root directory:**

   ```bash
   VITE_UNSPLASH_ACCESS_KEY=your_unsplash_api_key
   ```

5. **Start the development server:**

   ```bash
   npm start
   ```

6. **Open your browser and go to:**
   ```
   http://localhost:3000
   ```

## License

This project is for personal and educational purposes only. It is not intended for commercial use or distribution. Please respect the Unsplash API's terms of service.

---

This project is a fantastic way to get hands-on experience with modern web development tools and practices. If you encounter any issues or have suggestions for improvement, feel free to open an issue or submit a pull request. Happy coding!
