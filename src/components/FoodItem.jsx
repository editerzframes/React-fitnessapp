import styles from './fooditem.module.css';

export default function FoodItem({ food }) {
  return (
    <div className={styles.itemContainer}>
      <img src={food.image} alt="" />
      <h1>{food.title}</h1>
      <button>View Recipe</button>
    </div>
  );
}
