export default function AddTheme() {

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData);
        console.log(data.theme);
    }

    return (<>
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Add Theme</legend>
                <input name="theme" />
                <button type="submit">Add</button>
            </fieldset>
        </form>
    </>)
}