"use client";

import { memo } from "react";

export const Review = memo(() => {
  return (
    <section
      className="section review-request"
      id="review-request"
      style={{ "backgroundImage": "url('/images/hero-bg.webp')" } as React.CSSProperties}
    >
      <div className="custom-container">
        <div className="review-request-content text-center">
          {/* Header */}
          <div className="review-request-header">
            <h2 className="h2 section-title">
              Love Our Service?
            </h2>
            <p
              className="section-text"
              style={{
                color: 'var(--sonic-silver)',
                fontSize: 'var(--fontSize-6)',
                marginBlockEnd: '40px'
              }}>
              Help others discover our exceptional dental care by sharing your experience on Google Reviews
            </p>
          </div>

          {/* Google Badge */}
          <div className="google-review-badge">
            <div className="google-logo-wrapper">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
            </div>
            <div className="review-stars-display">
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
            </div>
          </div>

          {/* Call to Action */}
          <div className="review-cta">
            <a
              href="https://g.page/r/CTFjDvtSgCsCEAI/review"
              target="_blank"
              rel="noopener noreferrer"
              className="btn review-btn-primary"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{ marginInlineEnd: '10px' }}
              >
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Write a Google Review
            </a>
          </div>

          {/* Supporting Text */}
          <p className="review-support-text">
            It only takes 2 minutes and helps other patients find quality dental care
          </p>
        </div>
      </div>

      <style jsx>{`
        .review-request {
          position: relative;
          overflow: hidden;
        }
        .review-request::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          opacity: 0.5;
        }
        .review-request-content {
          position: relative;
          z-index: 2;
          max-width: 600px;
          margin-inline: auto;
        }
        .google-review-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          margin-block: 30px 40px;
          padding: 20px;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-6);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .google-logo-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .review-stars-display {
          display: flex;
          gap: 4px;
        }
        .review-stars-display .star {
          color: #FFD700;
          font-size: 24px;
          text-shadow: 0 0 4px rgba(255, 215, 0, 0.5);
        }
        .review-cta {
          margin-block: 40px 30px;
        }
        .review-btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background-image: var(--gradient);
          color: var(--white);
          font-size: var(--fontSize-7);
          font-weight: var(--weight-600);
          text-transform: uppercase;
          padding: 20px 40px;
          text-align: center;
          border-radius: var(--radius-4);
          box-shadow: var(--shadow-4);
          text-decoration: none;
          transition: var(--transition-2);
          min-width: 280px;
        }
        .review-btn-primary:hover {
          --deg: -90deg;
          transform: translateY(-2px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
        }
        .review-btn-primary:active {
          transform: translateY(0);
        }
        .review-support-text {
          color: var(--sonic-silver);
          font-size: var(--fontSize-7);
          font-style: italic;
          opacity: 0.8;
          margin-block-start: 20px;
        }

        @media (max-width: 768px) {
          .google-review-badge {
            flex-direction: column;
            gap: 15px;
            padding: 15px;
          }
          .review-btn-primary {
            min-width: auto;
            width: 100%;
            padding: 18px 30px;
            font-size: var(--fontSize-body-4);
          }
          .review-support-text {
            font-size: 14px;
          }
        }

        @media (max-width: 480px) {
          .google-review-badge {
            margin-inline: -10px;
          }
          .review-btn-primary svg {
            width: 16px;
            height: 16px;
            margin-inline-end: 8px;
          }
        }
      `}</style>
    </section>
  );
});

Review.displayName = "Review";