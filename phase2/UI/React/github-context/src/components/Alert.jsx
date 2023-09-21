function Alert({alert}){
    return (
        <>
            {alert && <p className={`alert-${alert.type}`}>{alert.msg}</p>}
        </>
    )
}

export default Alert