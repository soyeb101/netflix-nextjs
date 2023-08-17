import React from 'react';
import ContactCard from "@/app/components/ContactCard";
import styles from "./contact.module.css";
import ContactForm from "@/app/components/ContactForm";

const Contact = () => {
    return (
        <>
            <div className={styles.container}>
            <h1>Contact Us</h1>
            <ContactCard />

                <section className={styles.contact_section}>
                    <h2>Wed love to hear <span> from you </span></h2>

                    <ContactForm />
                </section>
            </div>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24174.74758540648!2d89.23662847267559!3d25.750813379076252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e32de6fca6019b%3A0x9fa496e687f818c8!2z4Kaw4KaC4Kaq4KeB4Kaw!5e0!3m2!1sbn!2sbd!4v1692263720103!5m2!1sbn!2sbd" width={100} height={450} style={{border: 0}} allowFullScreen="" loading="lazy" className={styles.mapping}
                referrerPolicy="no-referrer-when-downgrade" >
                
            </iframe>

        </>
    );
};

export default Contact;