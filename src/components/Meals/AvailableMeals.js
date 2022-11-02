import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Dosa',
    description: 'Light, Tasty, Healthy',
    price: 35.55,
  },
  {
    id: 'm2',
    name: 'Idli-Sambhar',
    description: 'Tangy,Tasty',
    price: 20.5,
  },
  {
    id: 'm3',
    name: 'Rasam',
    description: 'Soup,Healthy,Tangy,Spicy',
    price: 15,
  },
  {
    id: 'm4',
    name: 'Rice-Sambhar',
    description: 'Healthy...and green......and full meal',
    price: 30.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;