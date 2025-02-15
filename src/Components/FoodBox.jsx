import { Card, Col } from 'antd';


function FoodBox(props) {
    const { food } = props;
    return (
        <div>
            <Col>
                <Card
                    title={food.name}
                    style={{ width: 230, height: 300, margin: 10 }}
                >
                    <img src={food.image} height={60} alt="food" />
                    <p>Calories: {food.calories}</p>
                    <p>Servings: {food.servings}</p>
                    <p>
                        <b>Total Calories: {food.calories * food.servings} </b> kcal
                    </p>
                    <button type='submit'>Delete</button>
                </Card>
            </Col>
        </div>
    )
}

export default FoodBox