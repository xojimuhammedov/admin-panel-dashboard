import { Box, Button, Input } from '@chakra-ui/react';
import React from 'react';
import { useAuth } from '../../context';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const LoginForm = () => {
    const auth = useAuth()

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: { phone_number: "", password: "" },
        mode: "onBlur"
    })

    const onSubmit = (data) => {
        console.log(data)
        const { phone_number: phone_number, password } = data
        auth.login({ phone_number, password }, () => {
            toast.error("Xatolik yuzaga keldi!")
        })
    }

    return (
        <Box p={'24px'}>
            <form onSubmit={handleSubmit(onSubmit)} action="">
                <Input {...register("phone_number")} type="text" placeholder='PhoneNumber' />
                <Input {...register("password")} type="password" placeholder='Password' />
                <Button mt={'24px'} variant={'outline'} type='submit'>Submit</Button>
            </form>
        </Box>
    );
}

export default LoginForm;
