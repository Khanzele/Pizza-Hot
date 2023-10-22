import React from 'react';
import './Vue.css';

const VueOfPizza = ['Всё', 'Мясная', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

const Vue = ({value, onClickVue}) => {
  return (
    <div className="Vue">
      <ul className="VueContent">
        {VueOfPizza.map((el, index) => (
          <li onClick={() => onClickVue(index)} key={index} className={value === index ? 'active' : ''}>
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Vue;
