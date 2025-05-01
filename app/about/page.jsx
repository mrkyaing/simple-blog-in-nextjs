export default function aboutPage() {
    return (
        <div>
            <h1>About Page</h1>
            <p>This is the about page of our application.</p>
            <h3>my felling today!!{todayStatus()}</h3>
        </div>
    );
}

export const todayStatus = function () {
    return "Today is a good day!"
}
