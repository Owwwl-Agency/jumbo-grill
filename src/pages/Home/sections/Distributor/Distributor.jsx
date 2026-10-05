import Button from '@/components/ui/Button/Button'
import Media from '@/components/ui/Media/Media'
import distributorImage from '@/assets/images/distributor/distributor.webp'
import CheckboxCheckedIcon from '@/assets/icons/ui/checkbox-checked.svg?react'
import styles from './Distributor.module.css'

const FIELDS = [
  { name: 'fullName', label: 'Full Name', type: 'text', required: true, autoComplete: 'name' },
  { name: 'email', label: 'Email Address', type: 'email', required: true, autoComplete: 'email' },
  { name: 'country', label: 'Country / Region', type: 'text', required: true, autoComplete: 'country-name' },
  { name: 'phone', label: 'Phone', type: 'tel', required: true, autoComplete: 'tel' },
  { name: 'company', label: 'Company Name', type: 'text', autoComplete: 'organization' },
  { name: 'businessType', label: 'Business Type', type: 'text' },
]

function FieldLabel({ label, required }) {
  return (
    <span className={styles.placeholder}>
      {label}
      {required && <span className={styles.required}>*</span>}
    </span>
  )
}

export default function Distributor() {
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <section className={styles.section}>
      <Media src={distributorImage} alt="Burning charcoal in a grill" ratio="620 / 750" overlay="soft" className={styles.media}>
        <h2 className={styles.title}>
          <span className={styles.titleLine}>Become a Jumbo</span>{' '}
          <span className={[styles.titleLine, styles.titleEnd].join(' ')}>Distributor</span>
        </h2>
      </Media>

      <div className={styles.content}>
        <h3 className={styles.heading}>Partner with a brand that redefines outdoor cooking.</h3>
        <p className={styles.text}>
          Join our network of trusted distributors and bring the Grill Jumbo experience to customers in your region.
          We provide proven products, marketing support, and a partnership built on reliability.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.fields}>
            {FIELDS.map(({ name, label, required, ...inputProps }) => (
              <label key={name} className={styles.field}>
                <input className={styles.input} name={name} placeholder=" " required={required} {...inputProps} />
                <FieldLabel label={label} required={required} />
              </label>
            ))}
            <label className={[styles.field, styles.fieldWide].join(' ')}>
              <textarea className={[styles.input, styles.textarea].join(' ')} name="message" placeholder=" " />
              <FieldLabel label="Message" />
            </label>
          </div>

          <label className={styles.agreement}>
            <input type="checkbox" name="agreement" required className={styles.checkboxInput} />
            <span className={styles.checkbox}>
              <CheckboxCheckedIcon className={styles.checkboxIcon} aria-hidden="true" />
            </span>
            Agreement to Terms
          </label>

          <Button type="submit" variant="green" className={styles.submit}>
            Submit Application
          </Button>
        </form>
      </div>
    </section>
  )
}
