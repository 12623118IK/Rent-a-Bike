import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

export const AddCars = () => {
    const navigation = useNavigate();
    const {register, handleSubmit} = useForm();
    const onSubmit = async (data:any) => {
        try {
            await fetch('http://localhost:3000/cars', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),


            });
            navigation('/cars')
        } catch (e) {
            console.error('User creation failed');
        }
    }
    return (
        <>
            <div className="form">
            <h1 className="header">ADD CARS</h1>
            <br/>
            <br/>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register('manufacturer')} type ={'text'} placeholder={'Manufacturer'}/>
                    <input {...register('model')} type ={'text'} placeholder={'Model'}/>
                    <input {...register('price_per_day')} type ={'number'} placeholder={'Price for one day'}/>
                    <input {...register('rating')} type ={'number'} step="0.1" placeholder={'Rating'}/>
                    <ul>
                        <li>Rented <input {...register('is_rented')} type ={'radio'} value={1}/></li>
                        <li>Not rented  <input {...register('is_rented')} type ={'radio'} value={0}/></li>
                    </ul>
                    <ul>
                        <li>Active <input {...register('is_active')} type ={'radio'} value={1}/></li>
                        <li>Inactive  <input {...register('is_active')} type ={'radio'} value={0}/></li>
                    </ul>
                    <input {...register('image_url')} type ={'text'} placeholder={'Image url'}/>
                    <button type={'submit'}>Add car </button>

                </form>
            </div>
        </>
    )
}