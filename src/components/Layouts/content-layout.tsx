import * as React from "react";
// @ts-ignore
import { Head } from "../seo";

type ContentLayoutProps = {
  children: React.ReactNode;
  title: string;
};
export const ContentLayout = ({ children, title }: ContentLayoutProps) => {
  return (
    <>
      <Head title={title} />
      <div className="py-6">
        {/* Header section with image and title */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="d-flex align-items-center mb-4">
            <img
              width="120"
              height="120"
              src="/Profile.jpeg"
              className="img-fluid img-thumbnail me-4"
              alt="Profile"
              style={{ objectFit: "cover", borderRadius: "50%" }}
            />
            <h1 className="text-2xl font-semibold text-gray-900 mb-0">
              {title}
            </h1>
          </div>
          {/* Social media nav bar */}
          <nav className="mb-5">
            <ul className="nav">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://github.com/cguallpa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://linkedin.com/in/chrisguallpa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
              {/* Add more social links as needed */}
            </ul>
          </nav>
        </div>
        {/* Main content */}
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 md:px-8">
          {children}
        </div>
      </div>
    </>
  );
};
