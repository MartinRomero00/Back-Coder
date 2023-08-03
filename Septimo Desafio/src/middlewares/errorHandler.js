export const httpsResponseOk = (res, data) => {
    res.status(200).json({
        status: 'ok',
        data
    });
}

export const httpsResponseCreated = (res, data) => {
    res.status(201).json({
        status: 'created',
        data
    });
}

export const httpsResponseNotFound = (res, data) => {
    res.status(404).json({
        status: 'not found',
        data
    });
}

export const httpsResponseUnauthorized = (res, data) => {
    res.status(401).json({
        status: 'unauthorized',
        data
    });
}

export const errorHandler = (error, req, res, next) => {
    return httpsResponseNotFound(res, error.message);
}