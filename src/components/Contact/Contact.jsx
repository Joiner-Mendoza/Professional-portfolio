import "../../estilos/contact.css";
import emailjs from "@emailjs/browser";

function Contact() {

    const sendEmail = (event) => {
        event.preventDefault();

        emailjs.sendForm(
            "service_3hnog8o",      // Service ID de EmailJS
            "template_rykckep",     // Template ID de EmailJS
            event.target,           // Formulario
            "xP-dPY6hbiUiWucRM"     // Public Key
        )
        .then((response) => {

            console.log("Respuesta EmailJS:", response);

            alert("Formulario enviado correctamente");

            // Limpia los campos después de enviar
            event.target.reset();

        })
        .catch((error) => {

            console.error("Error EmailJS:", error);

            alert(
                "Error al enviar el formulario: " + error.text
            );

        });
    };


    return (
        <section className="contact" id="contact">

            <h2 className="title">
                Contact <span>Me!</span>
            </h2>


            <form onSubmit={sendEmail}>

                <div className="input-box">

                    <div className="input-field">

                        <input
                            type="text"
                            name="user_name"
                            className="input"
                            placeholder="Your Name"
                            required
                        />

                        <span className="focus"></span>

                    </div>



                    <div className="input-field">

                        <input
                            type="email"
                            name="user_email"
                            className="input"
                            placeholder="Your Email Address"
                            required
                        />

                        <span className="focus"></span>

                    </div>


                </div>



                <div className="input-box">


                    <div className="input-field">

                        <input
                            type="number"
                            name="number_mobile"
                            className="input"
                            placeholder="Number Mobile"
                            required
                        />

                        <span className="focus"></span>

                    </div>



                    <div className="input-field">

                        <input
                            type="text"
                            name="subject"
                            className="input"
                            placeholder="Subject"
                            required
                        />

                        <span className="focus"></span>

                    </div>


                </div>



                <div className="textarea">

                    <textarea
                        name="user_message"
                        cols="30"
                        rows="10"
                        placeholder="Send Message"
                        required
                    ></textarea>


                    <span className="focus"></span>

                </div>

                <div className="btn-box btns">

                    <button
                        type="submit"
                        className="ReadMore"
                    >
                        Send
                    </button>

                </div>


            </form>


        </section>
    );
}


export { Contact };