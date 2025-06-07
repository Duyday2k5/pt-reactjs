// Component
//fragment
import './style.css';

const MyComponent = () => {
    // const name = "Nhat Duy";
    const inform = {
        name: "Nhat Duy",
        work: "student",
    }
    return (
        <>
            <div className='Component'>Toi ten {inform.name} Đây là Component viết được html trong file react</div>
            <div className="bbq"
                style={
                    { fontSize: '32px' }
                }>###</div>
        </>
    );
}
const SecondComponent = () => {
    return (
        <div class='Component'>Đây là Component second viết được html trong file react</div>
    );
}

// export default MyComponent;
export { MyComponent, SecondComponent }