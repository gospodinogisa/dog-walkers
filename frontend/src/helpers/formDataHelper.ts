
const handleInputChange = (event: React.FormEvent<HTMLInputElement>, data: any) => {
    return { ...data, [event.currentTarget.name]: event.currentTarget.value }
}

export {handleInputChange}