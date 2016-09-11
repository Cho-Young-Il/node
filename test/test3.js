


const aParams = oRequestRelay.params;
const oQuery = {
    service_type: 'cafe24test',
    mall_id: 'ectuecapi0009',
    data_type: 'json',
    auth_code: '644bdcf6f9ec13358c6ef0a10a05566b',
    request: [
        {
            depth2: [
                {
                    depth3: 'test1',
                },
                {
                    depth3: 'test3'
                }
            ]
        }
    ]
}

const aParams = oRequestRelay.params;
const oQuery = oReq.getQueryAndBody();

aParams.each((oParam) => {
    if (oParam.required !== false) {

        const aName = oParam.name.split('/');
        if (aName.length === 1) {

            const sValue = oReq.getStrictParam(aName[0], '');
            if (sValue === undefined || sValue === null || sValue === '') {

                return requireValidator(oApiError({
                    message: `key: ${aName[0]}, value: ${sValue}`,
                    apiCode: oConstant.oCodes.API_ERROR_ESS_PARAM_VALID,
                    apiMessage: oConstant.getMessage(oConstant.oCodes.API_ERROR_ESS_PARAM_VALID)
                }));
            }
        } else {

            let aValue = clone(oQuery);

            console.log(oParam);


            while (aName.length !== 0) {

                if (aName.length > 1) {

                    aValue = aValue[aName[0]] || [];
                    if (aValue.length === 0) {
                        return requireValidator(oApiError({
                            message: `${aValue}.length: ${aValue.length}`,
                            apiCode: oConstant.oCodes.API_ERROR_BAD_REQUEST
                        }));
                    }

                    if (aValue.length > oAppConfig.api.process.create) {
                        return requireValidator(oApiError({
                            message: `${aValue}.length: ${aValue.length}`,
                            apiCode: oConstant.oCodes.API_ERROR_MAX_MULTI_REQ,
                            apiMessage: `최대 ${oAppConfig.api.process.create}건을 초과하여 처리되지 않았습니다.`
                        }));
                    }
                    // } else {
                    //     console.log(aValue);
                    //     const sValue = aValue[aName[0]] || '';
                    //     if (sValue === '') {
                    //         return requireValidator(oApiError({
                    //             message: `key: ${aName[0]}, value: ${sValue}`,
                    //             apiCode: oConstant.oCodes.API_ERROR_ESS_PARAM_VALID,
                    //             apiMessage: oConstant.getMessage(oConstant.oCodes.API_ERROR_ESS_PARAM_VALID)
                    //         }));
                    //     }
                }

                aName.splice(0, 1);
            }
        }
    }
});
