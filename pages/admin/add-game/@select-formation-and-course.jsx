export default function Choice() {
    return (
        <div className="container-fuild px-3 choice">
            <div className="items py-3">
                <span> Formation </span>
                <select name="formation" id="formation" className="px-3">
                    <option value="#"> 1. </option>
                    <option value="#"> 2. </option>
                </select>
            </div>
            <div className="items py-3">
                <span> Cours </span>
                <select name="course" id="course" className="px-3">
                    <option value="#"> 1. </option>
                    <option value="#"> 2. </option>
                </select>
            </div>
        </div>
    );
};