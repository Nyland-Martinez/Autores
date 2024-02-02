'use client'
import AuthorForm from "@/components/forms/AuthorForm";
import { Typography } from "@mui/material";
import axios from "axios";
import Link from "next/link";


const NewAuthorPage = () => {

    const { Fragment } = require("react")


    const createAutor = async (data, onSuccess, onFail) => {
        try {
            const response = await axios.post("http://localhost:8000/api/autores", data);
            const result = await response.data;
            console.log(result);
            onSuccess(result);
            } catch (error) {
            console.log(error);
            onFail(error);
        }
    };

    return (
        <Fragment>
            <Typography variant="h4" sx={{ mb: 4 }} >
                <Link href="/">
                    Home
                </Link>
            </Typography>
            <Typography variant="h5">
                Create New Author:
            </Typography>
            <AuthorForm onSubmit={createAutor} />
        </Fragment>
    )
}

export default NewAuthorPage;