'use client';

import { useState, useEffect } from 'react';

const BoltLogo = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 69 40"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M55.2616 9.82801e-06V30.0737H48.1259V1.5037L55.2616 9.82801e-06ZM34.9448 32.9238C36.9153 32.9238 38.5126 34.5079 38.5126 36.4619C38.5126 38.4159 36.9153 40 34.9448 40C32.9744 40 31.377 38.4159 31.377 36.4619C31.377 34.5079 32.9744 32.9238 34.9448 32.9238ZM34.9448 8.54054C41.0201 8.54054 45.9556 13.4251 45.9556 19.4595C45.9556 25.4939 41.02 30.3784 34.9448 30.3784C28.8597 30.3784 23.9341 25.4939 23.9341 19.4595C23.9341 13.4251 28.8696 8.54054 34.9448 8.54054ZM34.9448 22.9975C36.917 22.9975 38.5126 21.4152 38.5126 19.4595C38.5126 17.5037 36.917 15.9214 34.9448 15.9214C32.9726 15.9214 31.377 17.5037 31.377 19.4595C31.377 21.4152 32.9726 22.9975 34.9448 22.9975ZM12.4973 22.9975C13.7262 22.9975 14.7272 22.0049 14.7272 20.7862C14.7272 19.5676 13.7262 18.5749 12.4973 18.5749H7.14555V22.9975H12.4973ZM7.14555 7.07617V11.4988H11.1098C12.3387 11.4988 13.3397 10.5061 13.3397 9.28747C13.3397 8.0688 12.3387 7.07617 11.1098 7.07617H7.14555ZM19.068 14.172C20.7925 15.8624 21.8628 18.2015 21.8529 20.7862C21.8529 25.9165 17.6608 30.0737 12.4874 30.0737H0V0H11.0999C16.2733 0 20.4654 4.15725 20.4654 9.28747C20.4654 11.0762 19.96 12.7568 19.068 14.172ZM68.74 16.0197H65.1822V21.5725C65.1822 23.2531 65.7273 24.4914 67.1543 24.4914C68.0761 24.4914 68.75 24.285 68.75 24.285V29.4939C68.75 29.4939 67.2732 30.3784 65.2713 30.3784H65.1822C65.0929 30.3784 65.0136 30.3686 64.9244 30.3686H64.855C64.8154 30.3686 64.7658 30.3587 64.7262 30.3587C60.7421 30.1523 58.0365 27.6658 58.0365 23.3514V5.04177L65.1722 3.53808V8.94349H68.74V16.0197Z"
      fill="currentColor"
    />
  </svg>
);

const SpotifyLogo = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 496 512"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      fill="currentColor"
      d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8Z"
    />
    <path
      fill="currentColor"
      d="M406.6 231.1c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3zm-31 76.2c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm-26.9 65.6c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4z"
    />
  </svg>
);

export default function FiveLanding() {
  const [selectedExpense, setSelectedExpense] = useState<string>('');
  const [spotsLeft, setSpotsLeft] = useState(341);
  const [isLoading, setIsLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [eraserTriggered, setEraserTriggered] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [waitlistPosition, setWaitlistPosition] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const expenses = [
    { id: 'bolt', label: 'Bolt Ride', icon: <BoltLogo className="expense-icon-svg" />, amount: 5800 },
    { id: 'food', label: 'Food', icon: <img src="/assets/food_flash_icon.png" alt="Food" className="expense-icon-img" decoding="async" loading="eager" />, amount: 3500 },
    { id: 'data', label: 'Data', icon: <img src="/assets/flash_data_icon.png" alt="Data" className="expense-icon-img" decoding="async" loading="eager" />, amount: 2000 },
    { id: 'subscriptions', label: 'Spotify', icon: <SpotifyLogo className="expense-icon-svg" />, amount: 2900 },
    { id: 'other', label: 'Other', icon: <img src="/assets/other_expense_icon.png" alt="Other" className="expense-icon-img" decoding="async" loading="eager" />, amount: 0 },
  ];

  const handleEraserClick = () => {
    setEraserTriggered(true);
    setTimeout(() => setEraserTriggered(false), 3000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const position = Math.floor(Math.random() * 400) + 100;
    setWaitlistPosition(position);
    setFormSubmitted(true);
  };

  if (isLoading) {
    return (
      <div className="loading-screen">
        <img
          src="/assets/logo_head_five2.png"
          alt="FIVE Logo"
          className="loading-logo"
          decoding="async"
          loading="eager"
        />
      </div>
    );
  }

  return (
    <>
      <nav className={`nav ${isScrolled ? 'nav-scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <img src="/assets/FIVE_LOGO_DRAFT2.png" alt="FIVE" className="nav-logo-img" decoding="async" loading="eager" />
          </div>
          <div className="nav-center">Lagos · UNILAG First Drop · 2026</div>
          <div className="nav-spots">● {spotsLeft} Founding Spots Left</div>
        </div>
      </nav>

      <main>
        {/* SECTION 02 — HERO */}
        <section className="hero">
          <div className="hero-container">
            <div className="hero-copy">
              <div className="hero-eyebrow">FOUNDING ACCESS · UNILAG FIRST DROP</div>
              
              <h1 className="hero-headline">
                THE CARD<br />
                THAT PAYS<br />
                YOU BACK.
              </h1>

              <div className="hero-subheadline">
                <p>Not cashback.</p>
                <p>Not points.</p>
                <p className="hero-subheadline-punch">Your money should hit back.</p>
              </div>

              <div className="expense-selector">
                <p className="expense-selector-label">What would you erase first?</p>
                <div className="expense-buttons">
                  {expenses.map((exp) => (
                    <button
                      key={exp.id}
                      onClick={() => setSelectedExpense(exp.id)}
                      className={`expense-btn ${selectedExpense === exp.id ? 'expense-btn-active' : ''}`}
                    >
                      <span className="expense-icon">{exp.icon}</span>
                      <span>{exp.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="spots-progress">
                <div className="spots-progress-label">159 / 500 Founding Spots Claimed</div>
                <div className="spots-progress-bar">
                  <div className="spots-progress-fill" style={{ width: '31.8%' }} />
                </div>
              </div>

              <div className="hero-ctas">
                <button className="btn-primary">
                  Claim Founding Access
                </button>
                <button className="btn-secondary">
                  Watch The Eraser ↓
                </button>
              </div>
            </div>

            <div className="hero-visual">
              <div className="floating-card">
                <div className="card-glow" />
                <img
                  src="/assets/CARD_FIVE_ONE.png"
                  alt="FIVE Card"
                  className="card-image"
                />
                <div className="card-loop-animation">
                  <div className="expense-flash">-₦5,800</div>
                  <div className="balance-tick">+₦5,800</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 03 — THE ERASER DEMO */}
        <section className="eraser-demo">
          <div className="eraser-demo-container">
            <div className="eraser-demo-copy">
              <div className="section-tag">THE CORE MECHANIC</div>
              <h2 className="section-headline">THE ERASER.</h2>
              
              <div className="eraser-demo-body">
                <p>Hoard Sparks from spending.</p>
                <p>Burn them to erase real expenses.</p>
              </div>

              <div className="eraser-demo-proof">
                <p>No one screenshots a ₦15 OPay alert.</p>
                <p>Everyone screenshots ₦5,800 disappearing at 1am.</p>
              </div>
            </div>

            <div className="eraser-demo-feed">
              <div className="transaction-feed">
                <div className="transaction-item">
                  <div className="transaction-icon">
                    <BoltLogo className="transaction-logo" />
                  </div>
                  <div className="transaction-details">
                    <div className="transaction-merchant">Bolt</div>
                    <div className="transaction-time">23:47</div>
                  </div>
                  <div className="transaction-amount">₦5,800</div>
                </div>
                <div className="transaction-item">
                  <div className="transaction-icon">
                    <SpotifyLogo className="transaction-logo" />
                  </div>
                  <div className="transaction-details">
                    <div className="transaction-merchant">Spotify</div>
                    <div className="transaction-time">18:12</div>
                  </div>
                  <div className="transaction-amount">₦2,900</div>
                </div>
                <div className="transaction-item">
                  <div className="transaction-icon">
                    <img src="/assets/food_flash_icon.png" alt="Food" className="transaction-logo" />
                  </div>
                  <div className="transaction-details">
                    <div className="transaction-merchant">Shawarma</div>
                    <div className="transaction-time">21:30</div>
                  </div>
                  <div className="transaction-amount">₦3,500</div>
                </div>
              </div>

              <div className="sparks-meter">
                <div className="sparks-meter-label">Sparks Available: 6,200</div>
                <div className="sparks-meter-bar">
                  <div className="sparks-meter-fill" style={{ width: '78%' }} />
                </div>
              </div>

              <button 
                className="btn-erase"
                onClick={handleEraserClick}
              >
                ERASE THAT BOLT CHARGE
              </button>

              {eraserTriggered && (
                <div className="eraser-success">
                  <div className="eraser-success-amount">+₦5,800</div>
                  <div className="eraser-success-text">ERASED. GONE. DONE.</div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* SECTION 04 — HOW IT WORKS */}
        <section className="how-it-works">
          <div className="how-container">
            <div className="how-step">
              <div className="how-step-visual">
                <img
                  src="/assets/card_flash_sparks.png"
                  alt="Spend normally"
                  className="how-step-icon"
                  decoding="async"
                  loading="lazy"
                />
              </div>
              <h3 className="how-step-title">Spend Normally</h3>
              <p className="how-step-desc">Use your FIVE card for everything. Every tap counts.</p>
            </div>
            <div className="how-step">
              <div className="how-step-visual">
                <img
                  src="/assets/flash-sparks.png"
                  alt="Earn sparks"
                  className="how-step-icon"
                  decoding="async"
                  loading="lazy"
                />
              </div>
              <h3 className="how-step-title">Earn Sparks</h3>
              <p className="how-step-desc">Build up energy from your spending. The more you spend, the more you earn.</p>
            </div>
            <div className="how-step">
              <div className="how-step-visual">
                <img
                  src="/assets/eraser-five-icons.png"
                  alt="Erase expenses"
                  className="how-step-icon"
                  decoding="async"
                  loading="lazy"
                />
              </div>
              <h3 className="how-step-title">Erase Expenses</h3>
              <p className="how-step-desc">Burn Sparks to make real charges disappear. Your money comes back.</p>
            </div>
          </div>
        </section>

        {/* SECTION 05 — THE CARD */}
        <section className="card-showcase">
          <h2 className="card-showcase-headline">
            MATTE BLACK.<br />
            NEON EDGE.<br />
            EARNED.
          </h2>
          
          <div className="card-showcase-visual">
            <div className="card-showcase-glow" />
            <img
              src="/assets/CARD_FIVE_ONE.png"
              alt="FIVE Card"
              className="card-showcase-image"
            />
          </div>

          <div className="card-unlock-paths">
            <div className="unlock-path">
              <div className="unlock-path-label">OPTION 1</div>
              <div className="unlock-path-title">Form your squad</div>
            </div>
            <div className="unlock-divider">OR</div>
            <div className="unlock-path">
              <div className="unlock-path-label">OPTION 2</div>
              <div className="unlock-path-title">Deposit ₦5,000</div>
            </div>
          </div>
        </section>

        {/* SECTION 06 — MULTIPLIERS */}
        <section className="multipliers">
          <div className="multipliers-container">
            <h2 className="section-headline">MONEY MOVES BETTER TOGETHER.</h2>
            <p className="multipliers-desc">
              Your squad multiplies your Sparks, unlock speed, and Eraser power.
            </p>

            <div className="squad-visual">
              <div className="squad-node squad-node-filled">YOU</div>
              <div className="squad-connector" />
              <div className="squad-node squad-node-empty" />
              <div className="squad-connector" />
              <div className="squad-node squad-node-empty" />
              <div className="squad-connector" />
              <div className="squad-node squad-node-empty" />
              <div className="squad-connector" />
              <div className="squad-node squad-node-empty" />
            </div>

            <div className="multiplier-table">
              <div className="multiplier-row">
                <div className="multiplier-label">SOLO</div>
                <div className="multiplier-value">1×</div>
              </div>
              <div className="multiplier-row">
                <div className="multiplier-label">SQUAD</div>
                <div className="multiplier-value">1.5×</div>
              </div>
              <div className="multiplier-row">
                <div className="multiplier-label">FULL STREAK</div>
                <div className="multiplier-value">2×</div>
              </div>
              <div className="multiplier-row">
                <div className="multiplier-label">BOUNTY ZONES</div>
                <div className="multiplier-value">Up to 10×</div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 07 — CAMPUS ENERGY */}
        <section className="campus-energy">
          <div className="campus-locations">
            <div className="campus-location">NEW HALL</div>
            <div className="campus-location">YABA</div>
            <div className="campus-location">UNILAG</div>
            <div className="campus-location">MAINLAND NIGHTS</div>
          </div>
        </section>

        {/* SECTION 08 — LIVE ERASER FEED */}
        <section className="eraser-feed">
          <div className="eraser-feed-track">
            <div className="eraser-feed-item">Temi erased ₦4,200 transport</div>
            <div className="eraser-feed-separator">|</div>
            <div className="eraser-feed-item">New Hall Kings completed their squad</div>
            <div className="eraser-feed-separator">|</div>
            <div className="eraser-feed-item">Zainab jumped from #289 to #52</div>
            <div className="eraser-feed-separator">|</div>
            <div className="eraser-feed-item">189 founding spots remaining</div>
            <div className="eraser-feed-separator">|</div>
            <div className="eraser-feed-item">Temi erased ₦4,200 transport</div>
            <div className="eraser-feed-separator">|</div>
            <div className="eraser-feed-item">New Hall Kings completed their squad</div>
          </div>
        </section>

        {/* SECTION 09 — FOUNDING ACCESS */}
        <section className="founding-access">
          {!formSubmitted ? (
            <div className="founding-form-container">
              <h2 className="section-headline">SECURE YOUR SPOT.</h2>
              <p className="founding-subtext">
                Founding members unlock permanent perks, priority access, and OG status.
              </p>

              <form onSubmit={handleFormSubmit} className="founding-form">
                <div className="form-row">
                  <input 
                    type="text" 
                    placeholder="Name" 
                    className="form-input"
                    required
                  />
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-row">
                  <input 
                    type="text" 
                    placeholder="Faculty / Department" 
                    className="form-input"
                    required
                  />
                  <input 
                    type="text" 
                    placeholder="Selected Expense" 
                    className="form-input"
                    value={selectedExpense ? expenses.find(e => e.id === selectedExpense)?.label : ''}
                    readOnly
                  />
                </div>

                <div className="squad-preview">
                  <div className="squad-preview-label">Your Squad</div>
                  <div className="squad-preview-nodes">
                    <div className="squad-preview-node squad-preview-node-filled">YOU</div>
                    <div className="squad-preview-node" />
                    <div className="squad-preview-node" />
                    <div className="squad-preview-node" />
                    <div className="squad-preview-node" />
                  </div>
                  <div className="squad-preview-progress">
                    <div className="squad-preview-bar">
                      <div className="squad-preview-fill" style={{ width: '20%' }} />
                    </div>
                  </div>
                </div>

                <button type="submit" className="btn-claim">
                  CLAIM MY FOUNDING SPOT
                </button>
              </form>
            </div>
          ) : (
            <div className="founding-success">
              <div className="founding-success-bolt">⚡</div>
              <h2 className="founding-success-title">YOU'RE IN.</h2>
              <div className="founding-success-position">#{waitlistPosition}</div>
              <p className="founding-success-message">
                We've locked your {selectedExpense ? expenses.find(e => e.id === selectedExpense)?.label : 'spot'}.
              </p>

              <div className="referral-system">
                <h3 className="referral-title">Climb the waitlist</h3>
                <div className="referral-tiers">
                  <div className="referral-tier">1 invite → move up</div>
                  <div className="referral-tier">3 invites → Volt badge</div>
                  <div className="referral-tier">5 invites → Card priority</div>
                </div>
                <input 
                  type="text" 
                  readOnly 
                  value="five.app/ref/YOUR-CODE" 
                  className="referral-link"
                />
              </div>
            </div>
          )}
        </section>

        {/* SECTION 10 — FINAL CLOSE */}
        <section className="final-close">
          <div className="final-close-glow" />
          <h2 className="final-close-headline">WHAT WOULD YOU ERASE FIRST?</h2>
          <button className="btn-primary">
            Claim Founding Access
          </button>
        </section>
      </main>
    </>
  );
}
