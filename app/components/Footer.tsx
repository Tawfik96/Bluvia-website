import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent mb-6">
            Bluvia
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mb-6 mt-2">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/1Q4T5FGV8F/?mibextid=qi2Omg"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
              aria-label="Facebook"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-white hover:text-blue-500 transition-colors duration-300"
              >
                <path d="M22.675 0h-21.35C.597 0 0 .598 0 1.333v21.334C0 23.403.597 24 1.325 24h11.495v-9.294H9.691V11.01h3.129V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.797.143v3.24l-1.918.001c-1.504 0-1.795.716-1.795 1.763v2.31h3.587l-.467 3.696h-3.12V24h6.116C23.403 24 24 23.403 24 22.667V1.333C24 .598 23.403 0 22.675 0z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
              aria-label="LinkedIn"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-white hover:text-blue-400 transition-colors duration-300"
              >
                <path d="M19 0h-14C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5V5c0-2.761-2.239-5-5-5zM7.12 20.452H3.56V9.035h3.56v11.417zM5.34 7.632c-1.142 0-2.06-.928-2.06-2.072s.918-2.073 2.06-2.073 2.06.929 2.06 2.073-.918 2.072-2.06 2.072zM20.452 20.452h-3.56v-5.605c0-1.337-.026-3.056-1.861-3.056-1.861 0-2.145 1.454-2.145 2.956v5.705h-3.56V9.035h3.42v1.561h.05c.476-.898 1.637-1.845 3.37-1.845 3.603 0 4.269 2.37 4.269 5.45v6.251z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
              aria-label="Instagram"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-white hover:text-pink-500 transition-colors duration-300"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.17.056 1.97.24 2.427.403a4.92 4.92 0 011.675 1.09 4.918 4.918 0 011.09 1.675c.163.457.347 1.257.403 2.427.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.056 1.17-.24 1.97-.403 2.427a4.928 4.928 0 01-1.09 1.675 4.922 4.922 0 01-1.675 1.09c-.457.163-1.257.347-2.427.403-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.17-.056-1.97-.24-2.427-.403a4.922 4.922 0 01-1.675-1.09 4.92 4.92 0 01-1.09-1.675c-.163-.457-.347-1.257-.403-2.427C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.849c.056-1.17.24-1.97.403-2.427a4.918 4.918 0 011.09-1.675 4.92 4.92 0 011.675-1.09c.457-.163 1.257-.347 2.427-.403C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.74.127 4.672.308 3.758.642a7.073 7.073 0 00-2.58 1.637A7.072 7.072 0 00.642 4.859C.308 5.772.127 6.84.07 8.152.012 9.432 0 9.841 0 12c0 2.159.012 2.568.07 3.848.057 1.312.238 2.38.572 3.294a7.077 7.077 0 001.637 2.58 7.075 7.075 0 002.58 1.637c.914.334 1.982.515 3.294.572C9.432 23.988 9.841 24 12 24s2.568-.012 3.848-.07c1.312-.057 2.38-.238 3.294-.572a7.075 7.075 0 002.58-1.637 7.077 7.077 0 001.637-2.58c.334-.914.515-1.982.572-3.294.058-1.28.07-1.689.07-3.848s-.012-2.568-.07-3.848c-.057-1.312-.238-2.38-.572-3.294a7.072 7.072 0 00-1.637-2.58A7.073 7.073 0 0019.141.642c-.914-.334-1.982-.515-3.294-.572C14.568.012 14.159 0 12 0z" />
                <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zM18.406 4.594a1.44 1.44 0 11-2.879 0 1.44 1.44 0 012.879 0z" />
              </svg>
            </a>
          </div>

          <p className="text-gray-400 mb-3">Industrial Water Waste Solutions</p>
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Bluvia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
