export enum EnvTypeENUM {
  development = 'development',
  production = 'production',
  staging = 'staging',
}

const envType = (process.env.REACT_APP_NODE_ENV ||
  process.env.NODE_ENV ||
  EnvTypeENUM.development) as EnvTypeENUM;

const config = {
  apiBaseUrl: 'http://localhost:4000/api',
};

const configSocket = {
  apiBaseUrl: 'http://localhost:4000',
};

// eslint-disable-next-line default-case
switch (envType) {
  case EnvTypeENUM.production:
    config.apiBaseUrl = 'https://your-cool-site.com';
    break;

  case EnvTypeENUM.staging:
    config.apiBaseUrl = 'https://demo.your-cool-site.com';
    break;

  case EnvTypeENUM.development:
    config.apiBaseUrl = 'http://localhost:4000/api';
    break;
}

export const isDev = envType === EnvTypeENUM.development;

export default {
  config, configSocket,
};
