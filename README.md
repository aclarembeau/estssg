# ESTSSG - Configurationless Static Website Generator

ESTSSG (pronounced "est-sig") is a simple and lightweight static website generator designed for developers who prefer a configurationless approach. Its name is derived from the technologies it utilizes: EJs, SAAS, and Tailwind. With ESTSSG, you can quickly generate static websites without the need for complex setup or configuration files.

## Installation

To use ESTSSG, ensure that you have Node.js installed on your machine. Then, open your preferred command-line interface and run the following command:

```
npx estssg
```

This command will automatically install ESTSSG and set up a local development server for your website.

## Project Structure

By default, ESTSSG expects your website files to be located in the `src/` directory. This is where you can place your EJS templates, SCSS files, and other assets.

The compiled output will be generated in the `dest/` directory. This directory will contain the optimized static HTML, CSS, and JavaScript files that can be deployed to a web server.

## Local Development Server

ESTSSG includes a built-in local development server to preview your website. The server also supports live reloading, which means any changes you make to your source files will automatically trigger a refresh in the browser.

To access your website in the development environment, open your web browser and navigate to `http://localhost:8080`.

## Usage

1. Create the necessary files for your website in the `src/` directory. This can include EJS templates, SCSS files, and any other assets required for your site.
2. Run the following command in your terminal:

   ```
   npx estssg
   ```

   This will compile your source files, generate the static website in the `dest/` directory, and start the local development server.

3. Open your web browser and visit `http://localhost:8080` to view your website.

4. As you make changes to your source files in the `src/` directory, ESTSSG will automatically recompile the website and refresh the browser to reflect the changes.

5. When you are ready to deploy your website, simply copy the contents of the `dest/` directory to your web server.

## Customization

While ESTSSG is designed to be configurationless, you can still customize its behavior to some extent. You can modify the EJS templates, SCSS files, and other assets in the `src/` directory to match your specific needs.

Additionally, you can explore the ESTSSG documentation and source code to understand its inner workings and make more advanced modifications if required.

## Conclusion

ESTSSG provides a lightweight and straightforward solution for generating static websites without the need for extensive configuration. With its support for EJs, SAAS, and Tailwind, you can quickly create beautiful websites while enjoying the simplicity of a configurationless approach. Give ESTSSG a try and start building static websites effortlessly!

If you have any questions or encounter any issues while using ESTSSG, please refer to the documentation or seek support from the project's official channels.
