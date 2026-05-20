'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

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
    { id: 'bolt', label: 'Bolt Ride', icon: '🚗', amount: 5800 },
    { id: 'food', label: 'Food', icon: '🍔', amount: 3500 },
    { id: 'data', label: 'Data', icon: '📱', amount: 2000 },
    { id: 'subscriptions', label: 'Subscriptions', icon: '🎵', amount: 2900 },
    { id: 'other', label: 'Other', icon: '✏️', amount: 0 },
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
        <div className="loading-bolt">⚡</div>
      </div>
    );
  }

  return (
    <>
      <nav className={`nav ${isScrolled ? 'nav-scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">FIVE</div>
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
                <Image
                  src="/assets/CARD_FIVE_ONE.png"
                  alt="FIVE Card"
                  width={400}
                  height={250}
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
                  <div className="transaction-icon">🚗</div>
                  <div className="transaction-details">
                    <div className="transaction-merchant">Uber</div>
                    <div className="transaction-time">23:47</div>
                  </div>
                  <div className="transaction-amount">₦5,800</div>
                </div>
                <div className="transaction-item">
                  <div className="transaction-icon">🎵</div>
                  <div className="transaction-details">
                    <div className="transaction-merchant">Spotify</div>
                    <div className="transaction-time">18:12</div>
                  </div>
                  <div className="transaction-amount">₦2,900</div>
                </div>
                <div className="transaction-item">
                  <div className="transaction-icon">🍔</div>
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
                ERASE THAT UBER CHARGE
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
              <div className="how-step-visual">💳</div>
              <h3 className="how-step-title">Spend Normally</h3>
              <p className="how-step-desc">Use your FIVE card for everything. Every tap counts.</p>
            </div>
            <div className="how-step">
              <div className="how-step-visual spark-visual">⚡</div>
              <h3 className="how-step-title">Earn Sparks</h3>
              <p className="how-step-desc">Build up energy from your spending. The more you spend, the more you earn.</p>
            </div>
            <div className="how-step">
              <div className="how-step-visual">🔥</div>
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
            <Image
              src="/assets/CARD_FIVE_ONE.png"
              alt="FIVE Card"
              width={600}
              height={375}
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
