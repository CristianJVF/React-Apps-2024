import { Link } from 'react-router-dom';
import CompGeko from '../Components/ApiGeko/CompGeko';
import { useEffect, useState } from "react"
import { getData } from "../app/api";

const Geko = () => (
    <CompGeko />
)

export default Geko;