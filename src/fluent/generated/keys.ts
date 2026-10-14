import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: 'c46e21c9334b4ee896e2075909158d93'
                    }
                    br0: {
                        table: 'sys_script'
                        id: '4b67f9750f664ea8be34f765cf452390'
                    }
                    cs0: {
                        table: 'sys_script_client'
                        id: 'a99ad2569d304a70ab37389e3371f7c3'
                    }
                    'lodash.snakecase@4.1.1/index.js': {
                        table: 'sys_module'
                        id: '470c1e2c213c47dbbf1133488f86d625'
                    }
                    'lodash.snakecase@4.1.1/package.json': {
                        table: 'sys_module'
                        id: 'b84a1cb0dc6a441ab3a2ae44c2d02792'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '55f132aca5a84134bc2b557f868668bf'
                        deleted: false
                    }
                    src_server_script_ts: {
                        table: 'sys_module'
                        id: 'a496313dc46d4288a347f995c0b433fd'
                    }
                }
            }
        }
    }
}
