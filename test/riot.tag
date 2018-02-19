<example>
    <div onclick={ methodWhatNotExist }>{ test }</div>

    <script type="es6">
        var a = b;
        let c = [1,2,3]
        this.test = 1;

        notUsedMethod: (e) => {
            return 1;
        }
    </script>
</example>
