import './App.css';

// Viết một children component mẫu:
function DemoCardComponent() {
    return (
        <div className="tour-box-card">
            <div class="tour-top">
                <img src="./images/image-thailands-sea.png" alt="bo-bien-thailands" />
                <div class="tour-price">
                    <span>From $40</span>
                </div>
            </div>

            <div class="tour-content">
                <h3 class="tour-title">Thailands Ayutthaya Temples Cruise from Bangkok</h3>
                <div class="tour-info">
                    <div class="tour-review">
                        <img src="./images/Shape-stars.png" alt="rating-star" />
                        <div class="tour-review-count">
                            <span>4.8 (12 reviews)</span>
                        </div>
                    </div>
                    <div class="tour-duration">
                        <span>Duration: 9 hours</span>
                    </div>
                </div>
                <div class="tour-button">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        Tours Price $61
                    </a>
                </div>
            </div>
        </div>
    );
}

// =======================================
// Parent Component
function App() {
    return (
        <div className="tour-container">
            <div className="tour-cards">
                <DemoCardComponent></DemoCardComponent>
                <DemoCardComponent></DemoCardComponent>
                <DemoCardComponent></DemoCardComponent>
                <DemoCardComponent></DemoCardComponent>
                <DemoCardComponent></DemoCardComponent>
                <DemoCardComponent></DemoCardComponent>
            </div>
        </div>
    );
}

export default App;
