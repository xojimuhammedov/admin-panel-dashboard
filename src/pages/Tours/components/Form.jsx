import { Box, Button, Heading, Input, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import usePostQuery from '../../../hooks/usePostQuery';
import { useForm } from 'react-hook-form';

const TourForm = () => {

    const { mutate, isLoading, isError } = usePostQuery({
        listKeyId: 'catsData',
        hideSuccessToast: true
    });

    const {
        handleSubmit,
        register
    } = useForm({
        mode: "onChange"
    })

    const onSubmit = (data) => {
        console.log(data)
        mutate(
            {
                url: '/cats',
                attributes: data
            },
            {
                onSuccess: (data) => {
                    toast.success('Successfully created!');
                },
                onError: (e) => {
                    console.log(e);
                }
            }
        );
    };

    if (isLoading) return "Javob kelishi kutilmoqda...."

    return (
        <Box m={'24px'}>
            <Box {...css.form}>
                <Heading {...css.title}>Tour Create</Heading>
                <form onSubmit={handleSubmit(onSubmit)} action="">
                    <SimpleGrid gap={'24px'} columns={2}>
                        <Input {...register("name_uz")} placeholder='Name Uz' />
                        <Input {...register("name_ru")} placeholder='Name Ru' />
                        <Input {...register("name_en")} placeholder='Name Eng' />
                        <Input {...register("name_tr")} placeholder='Name Turk' />
                    </SimpleGrid>
                    <Button type='submit' {...css.button}>Submit</Button>
                </form>
            </Box>
        </Box>
    );
}

export default TourForm;



const css = {
    form: {
        background: "#fff",
        borderRadius: "10px",
        padding: "30px 0px 30px 30px",
    },
    button: {
        borderRadius: "8px",
        background: "var(--container-primary, #1570EF)",
        color: "#fff",
        width: "250px",
        height: "45px",
        marginTop: "24px",

        _hover: {
            background: "var(--container-primary, #1570EF)",
        }
    },
    title: {
        fontSize: "24px",
        marginBottom: "12px"
    }
}