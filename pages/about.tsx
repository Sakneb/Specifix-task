import styles from "@/styles/Home.module.scss";

const About = () => {
  return (
    <div className={styles.about}>
      <h1>Who We Are</h1>
      <div className={styles.text}>
        <p>
          Specifix is a leading provider of advanced surgical tools designed by
          hand surgeons for hand surgeons. Founded as a spin-off from IMEC, the
          University of Antwerp, and the MORE institute, our solutions result
          from collaboration with experts in the field. At Specifix, we offer
          surgeons a cutting-edge tool designed to upgrade the surgical fixation
          of wrist fractures. A market survey with 45 hand surgeons worldwide
          confirmed the need for such a tool, as 82% appreciate the great value
          of this tool. By integrating advanced AI technology, Specifix offers
          solutions that significantly reduce surgical duration while enhancing
          surgical precision. This solution consists of a web application
          containing a patented, automated 3D pre-operative planning with a
          processing time of under 2 hours, leading to a 20-minute decrease in
          surgery and a significant reduction in complications and the need for
          plate removal.
        </p>
      </div>
    </div>
  );
};

export default About;
