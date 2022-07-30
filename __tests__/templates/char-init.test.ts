import { charInit } from '../../src-ts/templates/char-init'
import { generate } from '../../src-ts/templates/generate'

jest.mock('../../src-ts/templates/generate')

beforeEach(() => {
    jest.clearAllMocks()
    jest.restoreAllMocks()
})

describe('Character Page Init Script', () => {
    describe('when no arguments are passed', () => {
        it('logs the help menu', () => {
            jest.spyOn(console, 'log').mockImplementation((str) => str)
            charInit('', [])

            expect(generate).not.toHaveBeenCalled()
            expect(console.log).toHaveBeenCalledTimes(19) // eslint-disable-line
        })
    })

    describe('when only character is passed', () => {
        it('generates the character Page', () => {
            charInit('PeterParker', [])

            expect(generate).toHaveBeenCalledTimes(1)
            expect(generate).toHaveBeenCalledWith('-c', '-p', 'PeterParker', '')
        })
    })

    describe('when character is passed with falsy section flags', () => {
        it('generates the character Page', () => {
            charInit('PeterParker', ['-flag', '-anotherFlag'])

            expect(generate).toHaveBeenCalledTimes(1)
            expect(generate).toHaveBeenCalledWith('-c', '-p', 'PeterParker', '')
        })
    })

    describe('when character is passed with proper section flags', () => {
        it('generates the character Page and sections', () => {
            charInit('PeterParker', ['-assoc', '-attr'])

            expect(generate).toHaveBeenCalledTimes(3)
            expect(generate).toHaveBeenCalledWith('-c', '-p', 'PeterParker', '')
            expect(generate).toHaveBeenCalledWith('-c', '-s', 'PeterParker', 'associations')
            expect(generate).toHaveBeenCalledWith('-c', '-s', 'PeterParker', 'attributes')
        })
    })
})
