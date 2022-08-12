const Logo = () => {
    return (
    <div className="logo">
        {/* Les images importées depuis la balise img sont accesibles dans "public" */}
        <img src="./logo192.png" alt="logo React" />
        <h3>React World</h3>
    </div>
    );
};

export default Logo;