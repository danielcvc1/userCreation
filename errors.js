
export function DuplicateEntry(entryName) {
    return {
        key: "DUPLICATE_ENTRY",
        message: `Entry [${entryName}] must be unique`,
        status: 409,
    }
}

export function handleJoiValidationErrors(error) {
    const errData = error.details.map((err) => {
        return {
            message: err.message,
            path: err.path
        }
    })

    return {
        key: "VALIDATION_ERR",
        message: "Validation failed",
        errors: errData,
        status: 400,
    }
}


// export function inValidPassword(error)




