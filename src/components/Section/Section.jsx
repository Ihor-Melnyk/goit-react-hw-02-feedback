import style from './Section.module.scss';
const Section = ({ title, children }) => (
  <div>
    <h2 className={style.title}>{title}</h2>
    {children}
  </div>
);
export default Section;
