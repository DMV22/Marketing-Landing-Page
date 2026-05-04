import { useState } from 'react'
import { accordionItemsData } from './accordionItems.data'
import plusIcon from '../../../assets/plus-circle.svg'
import minusIcon from '../../../assets/minus-circle.svg'
import styles from './AccordionItems.module.scss'

export default function AccordionItems() {
  const [activeId, setActiveId] = useState(accordionItemsData.map(item => item.id));

  const toggleAccordion = (id) => {
    setActiveId((prev) => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
  }

  return (
    <div className="items">
      {accordionItemsData.map((item) => {
        const isOpen = activeId.includes(item.id)

        return (
          <div key={item.id} className={styles.item}>
            <button type="button"
              className={styles.question}
              onClick={() => toggleAccordion(item.id)}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${item.id}`}
              id={`faq-trigger-${item.id}`}>
              <span className={styles.title}>{item.title}</span>
              <img src={isOpen ? minusIcon : plusIcon} width={24} height={24} alt="" className={styles.icon} />
            </button>

            {isOpen && (
              <div id={`faq-panel-${item.id}`}
                role="region"
                aria-labelledby={`faq-trigger-${item.id}`}
                className={styles.answer}>
                <p className={styles.content}>{item.content}</p>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
