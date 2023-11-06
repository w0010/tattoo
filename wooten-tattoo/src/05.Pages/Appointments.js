import React, { useState } from 'react';
import booking from '../01.Atoms/Images/w10/00 Brad Wooten Portrait.jpg';
import { Button } from '../01.Atoms/Button/Buttons';

const Appointments = () => {
    const [email, setEmail] = useState('');  // State for the email input

    const handleSubmit = async (e) => {
        e.preventDefault();

        // This is where you'll send the email to your Zapier webhook
        const zapierWebhookURL = 'YOUR_ZAPIER_WEBHOOK_URL_HERE';  // Replace with your actual webhook URL

        try {
            await fetch(zapierWebhookURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),  // Sending the email as a JSON payload
            });
            // Handle success (e.g., show a success message to the user)
        } catch (error) {
            // Handle error (e.g., show an error message to the user)
        }
    }

    return (
        <main id="appointments">
            <section>
                <h2>Appointments</h2>
                <article>

                    <div className="article-image-container">
                        <img className="article-image" src={booking} alt="Brad tattooing a client" />
                    </div>

                    <div className="article-content">
                        <p>
                            Current clients use a seperate website to book and manage their appointments.
                            If you're already a client, input the same email you used to book with here and a new link will be sent to you.
                        </p>

                        <form onSubmit={handleSubmit}>

                            <input
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                            />
                            <Button type="submit">
                                Send Link
                            </Button>
                        </form>

                    </div>
                </article>
            </section>
        </main>
    )
}

export default Appointments;