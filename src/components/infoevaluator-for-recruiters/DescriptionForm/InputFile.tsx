import React from 'react';
import { primaryButtonInvertedStyle } from '@components/ui/button/styles';
import Image from 'next/image';
import { FieldError } from 'react-hook-form';
import { Spinner } from '@components/ui/spinner/Spinner';
import { EvaluationState } from 'types';

interface Props {
  inputFileId: string;
  inputFileName: string;
  inputFileListValue: FileList | undefined;
  isButtonSubmitting: boolean;
  isFormSubmitting: boolean;
  evaluationState: EvaluationState | null | undefined;
  error: FieldError | undefined;
  register: () => any;
}

export const InputFile: React.FC<Props> = (props) => {
  const {
    inputFileId,
    inputFileName,
    inputFileListValue,
    isButtonSubmitting,
    isFormSubmitting,
    evaluationState,
    error,
    register,
  } = props;

  const file = inputFileListValue?.[0];
  return (
    <>
      <div className="flex flex-row items-center gap-2 flex-wrap">
        {!!file && evaluationState == null && (
          <button
            disabled={isFormSubmitting}
            type="submit"
            className={
              'disabled:hover:none md:w-60 ' + primaryButtonInvertedStyle
            }
            name={inputFileName}
          >
            {isButtonSubmitting ? (
              <Spinner color="primary" />
            ) : (
              'Procesar informacion'
            )}
          </button>
        )}
        {!!file && evaluationState && evaluationState.state === 'success' && (
          <Image
            src="/assets/check.png"
            width={20}
            height={20}
            alt="document"
          />
        )}
        {!!file && evaluationState && evaluationState.state === 'error' && (
          <Image
            src="/assets/alert.png"
            width={20}
            height={20}
            alt="document"
          />
        )}
        {!file && (
          <label
            className={`p-2 rounded h-10 text-white max-w-xs text-center ${
              isFormSubmitting
                ? 'bg-gray-d1 hover:bg-gray-d1 pointer-events-none'
                : 'bg-primary hover:bg-primary-dark'
            }`}
            htmlFor={inputFileId}
          >
            Cargar archivo
          </label>
        )}
        <input
          disabled={isFormSubmitting}
          id={inputFileId}
          className="hidden"
          type="file"
          {...register()}
        />
        {file && (
          <div className="flex">
            <Image
              src="/assets/cvIcon.png"
              width={20}
              height={20}
              alt="document"
            />
            <span className="ml-2 text-sm font-medium text-primary">
              {file?.name}
            </span>
          </div>
        )}
      </div>
      {/* Error provided by validateFileList method */}
      {error?.message && (
        <span className="block text-error font-bold text-sm mt-3">
          {error.message}
        </span>
      )}
      {/* Error when file has been processed */}
      {evaluationState?.state === 'error' && (
        <span className="block text-error font-bold text-sm mt-3">
          {evaluationState.error}
        </span>
      )}
    </>
  );
};
