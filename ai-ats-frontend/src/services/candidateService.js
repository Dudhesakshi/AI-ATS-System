import axios from "axios";

const API_URL = "http://localhost:8080/candidates";

export const getCandidates = async () => {

    try {

        const response =
            await axios.get(API_URL);

        return response.data;

    }

    catch (error) {

        console.log(
            "Error fetching candidates:",
            error
        );

        return [];

    }

};