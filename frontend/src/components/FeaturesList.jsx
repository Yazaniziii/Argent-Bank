import iconchat from '../assets/img/icon-chat.webp'
import iconmoney from '../assets/img/icon-money.webp'
import iconsecurity from '../assets/img/icon-security.webp'

export default function FeaturesList() {
  return (
    <section className="features">
        <h2 className="sr-only">Features</h2>
        <div className="feature-item">
            <img
            className='feature-icon' 
            src={iconchat} 
            alt="icon de chat" />
            <h3 className='feature-item-title'>You are our #1 priority</h3>
            <p>Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.</p>
        </div>
        <div className="feature-item">
        <img
            className='feature-icon' 
            src={iconmoney} 
            alt="icon argent" />
            <h3 className='feature-item-title'>More savings means higher rates</h3>
            <p>The more you save with us, the higher your interest rate will be!</p>
        </div>
        <div className="feature-item">
        <img
            className='feature-icon' 
            src={iconsecurity} 
            alt="icon de securiter" />
            <h3 className='feature-item-title'>Security you can trust</h3>
            <p>We use top of the line encryption to make sure your data and money is always safe.</p>
        </div>
    </section>
  )
}