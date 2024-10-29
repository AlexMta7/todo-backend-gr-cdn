import {
  SecretsManagerClient,
  GetSecretValueCommand,
} from '@aws-sdk/client-secrets-manager'
import config from '../../config.js'

export const getSecret = async () => {
  const secret_name = config.SECRET_NAME

  const clientSM = new SecretsManagerClient({
    region: 'us-east-1',
  })

  let response

  try {
    response = await clientSM.send(
      new GetSecretValueCommand({
        SecretId: secret_name,
        VersionStage: 'AWSCURRENT', // VersionStage defaults to AWSCURRENT if unspecified
      })
    )
  } catch (error) {
    throw error
  }

  return response.SecretString
}
